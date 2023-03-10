import {
  FaWhatsapp,
  FaMailBulk,
  FaHourglassHalf,
  FaAngellist,
} from 'react-icons/fa'

import styles from './styles.module.css'

export const Contacts = () => {
  return (
    <div>
      <div className={styles.animeLeft}>
        <div className={styles.containerContatcs}>
          <h1>
            <FaHourglassHalf
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            Horarios de Funcionamento
          </h1>
          <p>
            Segunda à Sexta <br /> dás 08:00 à 12:00 e dás 14:00 à 17:20.
          </p>
          <p>
            Sábado <br /> dás 08:00 à 12:00
          </p>
        </div>
        <div className={styles.containerContatcs}>
          <h1>
            <FaAngellist
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            Contato de Atenimento
          </h1>
          <p>
            <FaWhatsapp
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            79 9 9959-1921 <br />
            <FaMailBulk
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            tudotudo_tb@hotmail.com
          </p>

          <p>
            <FaWhatsapp
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            79 9 9923-242 <br />
            <FaMailBulk
              style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
            />
            jonesbass.tb@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
