import { useEffect, useState } from 'react'
import { CardProducts } from '../../Components/CardProducts/CardProducts'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

import { FaChild, FaLayerGroup } from 'react-icons/fa'
import { BiSelectMultiple } from 'react-icons/bi'

import { apiProducts } from '../../services/apiProducts'
import { Product } from '../../@types/product'
import { toast } from 'react-toastify'
import { LoadingComponent } from '../../Components/Loading'

import 'keen-slider/keen-slider.min.css'
import styles from './styles.module.css'

export interface ProductFormat extends Product {
  priceFormattd: string
}

const textIcons = [
  'Xerox - Impressões',
  'Plastificação',
  'Encadernação ',
  'Consultas de Veículos',
  'Consultas CPF',
  'Fardamentos',
  'Sublimação em Geral ',
  'Personalizados em Geral',
]

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState<ProductFormat[]>([])

  useEffect(() => {
    async function loadDados() {
      setLoading(true)
      try {
        const response = await apiProducts.get('/productlist')
        const data = await response.data

        setDados(data)
      } catch (error) {
        toast.error('Erro ao exibir produtos, tente novamente mais tarde.')

        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    loadDados()
  }, [])

  if (loading) {
    return <LoadingComponent />
  }

  return (
    <div>
      {dados.map((item) => {
        return <CardProducts item={item} key={item.id} />
      })}

      <div className={styles.containerSobre}>
        <h1>
          <FaChild style={{ marginBottom: '-0.5rem' }} /> SOBRE NÓS
        </h1>
        <section className={styles.sobre}>
          <div className={styles.sobreInfo}>
            <h1>
              <FaLayerGroup style={{ marginBottom: '-0.4rem' }} /> TudoTudo
              Copiadora
            </h1>
            <p>
              Somos uma empresa especializadas em serviços gráficos há mais de
              08 anos aqui no Centro-Sul de Sergipe, somos líder em atendimento,
              trabalhamos com responsabilidade, credibilidade e satisfação
              levando com todo carinho aos nossos clientes e amigos.
            </p>
            <h2>Trabalhamos</h2>
            <div className={styles.containerText}>
              <div>
                {textIcons.map((item, index) => (
                  <li key={index} className={styles.iconsService}>
                    <BiSelectMultiple color="tomato" /> {item}
                  </li>
                ))}
              </div>
              <div className={styles.imageContainerSobre}>
                <div className={styles.image1}>
                  <img
                    className={styles.imgPersonalizados}
                    src={img1}
                    alt="Personalizados"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.imgPersonalizados}
                    src={img2}
                    alt="Personalizados"
                  />

                  <img
                    className={styles.imgPersonalizados}
                    src={img3}
                    alt="Personalizados"
                  />

                  <img
                    className={styles.imgPersonalizados}
                    src={img4}
                    alt="Personalizados"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
