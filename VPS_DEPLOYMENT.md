# VPS Deployment Guide - Portfolio Website

## Quick Start

Your portfolio will be accessible at: `http://10.197.209.199:3000`

---

## Option 1: Development Server (Simple, for testing)

### On Your VPS:

```bash
# 1. Copy your portfolio to VPS
# (from your local machine)
scp -r /home/orangefrodo/Documents/Dev/PortfolioWebsite user@10.197.209.199:/home/user/

# 2. SSH into VPS
ssh user@10.197.209.199

# 3. Navigate to project
cd /home/user/PortfolioWebsite

# 4. Install dependencies (if not already)
npm install

# 5. Start development server
npm start
```

The server will listen on `localhost:3000` by default. To make it accessible from outside:

```bash
# Start with HOST=0.0.0.0 to listen on all interfaces
HOST=0.0.0.0 PORT=3000 yarn start
```

**Access:** `http://10.197.209.199:3000`

---

## Option 2: Production Build with serve (Recommended)

### On Your VPS:

```bash
# 1. Copy project to VPS (same as above)

# 2. SSH into VPS
ssh user@10.197.209.199

# 3. Navigate and build
cd /home/user/PortfolioWebsite
npm install
npm run build

# 4. Install serve globally
npm install -g serve

# 5. Start production server
serve -s build -l 3000
```

**Access:** `http://10.197.209.199:3000`

---

## Option 3: Keep Running with PM2 (Best for production)

Use PM2 to keep the server running even after you disconnect.

### On Your VPS:

```bash
# 1. Install PM2 globally
npm install -g pm2

# 2. Navigate to project
cd /home/user/PortfolioWebsite

# 3. Build the project
npm run build

# 4. Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npx',
    args: 'serve -s build -l 3000',
    cwd: '/home/user/PortfolioWebsite',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
EOF

# 5. Start with PM2
pm2 start ecosystem.config.js

# 6. Save PM2 config
pm2 save

# 7. Setup PM2 to start on boot
pm2 startup
# (follow the command it shows)
```

### PM2 Commands:

```bash
pm2 status              # Check status
pm2 logs portfolio      # View logs
pm2 restart portfolio   # Restart
pm2 stop portfolio      # Stop
pm2 delete portfolio    # Remove
```

**Access:** `http://10.197.209.199:3000` (stays running 24/7)

---

## Firewall Configuration

Make sure port 3000 is open:

```bash
# UFW (Ubuntu/Debian)
sudo ufw allow 3000/tcp

# Firewalld (CentOS/RHEL)
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload

# iptables
sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
```

---

## Testing

From any machine on the same network:
```bash
curl http://10.197.209.199:3000
```

Or open in browser: `http://10.197.209.199:3000`

---

## Optional: Use Nginx Reverse Proxy (Port 80)

If you want to access without `:3000`:

### Install Nginx:
```bash
sudo apt update
sudo apt install nginx
```

### Create Nginx config:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this:
```nginx
server {
    listen 80;
    server_name 10.197.209.199;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Now access at: `http://10.197.209.199` (no port needed!)

---

## Recommended Setup

For a VPS, I recommend **Option 3 (PM2)** because:
- Keeps server running 24/7
- Auto-restarts on crash
- Starts on server reboot
- Easy log management
- Production-optimized build

---

## Quick Commands Summary

```bash
# Copy to VPS
scp -r PortfolioWebsite user@10.197.209.199:/home/user/

# On VPS
cd /home/user/PortfolioWebsite
npm install
npm run build
npm install -g pm2 serve
pm2 start "serve -s build -l 3000" --name portfolio
pm2 save
pm2 startup
```

Done! Access at `http://10.197.209.199:3000` 🚀
