import './App.css'
import PixelBlast from '../@/components/PixelBlast';
function App() {
  

  return (
    <>

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <PixelBlast
    variant="square"
    pixelSize={4}
    color="#B497CF"
    patternScale={2}
    patternDensity={1}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.5}
    edgeFade={0.25}
    transparent
  />
</div>
     
    </>
  )
}

export default App
