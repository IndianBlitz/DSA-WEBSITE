import { useSpring, animated } from '@react-spring/web'


const SubHeadingSection1 =function(){
    const tanstiton_properties_subheading = useSpring({
        
        from:{
            opacity: 0,
            top:"80%",
        },
        delay:1000,
        to:{
            opacity: 1,
            top:"64%",
        }
       
    })
    return (
       
        <animated.p style={{
            position:"absolute",
           
            left:"13%",
            textAlign:"center",
            fontSize:"1.3rem",
            color:"black",
            ...tanstiton_properties_subheading,
        }}>
            Data  strucutres and Algorithm made easy by .This website a one way to ur dsa career with patterns and way  to figure out this ,So why <br/>waste time hop on</animated.p>
        
    )
}

export default SubHeadingSection1;