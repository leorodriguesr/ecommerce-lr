import styles from "./styles.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <p>FIQUE POR DENTRO DAS NOSSAS</p>
        <p>NOVIDADES E PROMOÇÕES</p>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />

        <button>Assinar</button>
      </div>

      <div className={styles.footerMain}>
        <section>
          <div>
            <p>INSTITUCIONAL</p>
            <ul>
              <li>Home</li>
              <li>Nossa Loja</li>
              <li>Quem Somos</li>
              <li>Trabalhe Conosco</li>
              <li>Regulamentos e Promoções</li>
            </ul>
          </div>
          <div>
            <p>AJUDA</p>
            <ul>
              <li>Dúvidas Frequentes</li>
              <li>Política de Segurança</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div>
            <p>CONTA</p>
            <ul>
              <li>Minha Conta</li>
              <li>Meus Pedidos</li>
              <li>Procon GO</li>
            </ul>
          </div>
          <div>
            <p>ATENDIMENTO</p>
            <ul>
              <li>62 996113651</li>
              <li>sac@ludimilareis.com.br</li>
            </ul>
          </div>
          <div className={styles.icons}>
            <a>
              <FacebookIcon />
            </a>
            <a>
              <InstagramIcon />
            </a>
            {/* <WhatsAppIcon /> */}
            <a>
              <YouTubeIcon />
            </a>
            <a>
              <LinkedInIcon />
            </a>
          </div>
        </section>
      </div>

      <div className={styles.footerBottom}>
        <p>Ludimila Reis Closet - ME, CPNJ: 000.00.0000/00 - Avenida Antônio Fidelis, Qd. 104, Lt. 01, Cond. Vivaz apt. 2402B - Parque Amazônia - Goiânia - GO - CEP: 74840-090</p>
      </div>
    </div>
  );
}
