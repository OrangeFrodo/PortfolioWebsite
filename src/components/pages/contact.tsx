// Css
import "./stylesPages.css"

export default function Contact() {
    /*
    const Map: React.FC<{}> = () => { };
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    // For google maps
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };
    */

    return (
        <section id='contact'>
            <div className='contact-container'>
                <h1 className='contact-container-h1-pos1'>Contact</h1>
                <p>E-Mail: daxoja@gmail.com</p>
                <p>Github: https://github.com/OrangeFrodo</p>
                {/*                 
                <Wrapper apiKey={"YOUR_API_KEY"}>
                    <MyMapComponent />
                </Wrapper>
                */}


            </div>
        </section>
    );
}
