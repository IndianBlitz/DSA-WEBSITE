import { useSpring, animated } from '@react-spring/web'




const HeadingSeaction1  =function (){
    const tanstiton_properties = useSpring({
        delay:750,
        from: { opacity: 0 },
        to: { opacity: 1 },
       
    })
    return (
        <animated.h1 style={{
            position:"absolute",
            top:"31%",
            left:"12%",
            textAlign:"center",
            fontSize:"6rem",
            color:"black",
          
            ...tanstiton_properties,
            
        }}> DATA STRUCTURES AND <br/>ALGORITHMS</animated.h1>
    )
}

export default HeadingSeaction1 ;