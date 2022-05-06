import styles from './styles.module.scss';

import { Slider } from './Slider';
import { Queridinhos } from './Queridinhos';
import { MaisVistos } from './Carousel/MaisVistos';
import { MaisVendidos } from './Carousel/MaisVendidos';
import { Recomendados } from './Carousel/Recomendados';






export function Main() {
  return (
    <main>
      <div>
        <Slider />
        <Queridinhos />
        <MaisVistos />
        <MaisVendidos />
        <Recomendados />

        
      </div>
    </main>
  )
}