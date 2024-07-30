import Image from "next/image";
import profilePic from "@/images/profile_picture.jpg";
import styles from "./About.module.scss";

const birthDate = new Date("1998-06-30");
const currentDate = new Date();
const difference = currentDate.getTime() - birthDate.getTime();
const ageDate = new Date(difference);
const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutRow}>
          <div className="col-md-4">
            <h2 className="heading">Über mich</h2>
            <Image
              className={styles.profilePicture}
              src={profilePic}
              alt="Hendrik Schmitz"
            />
          </div>
          <div className="col-md-8">
            <p>
              Mein Name ist Hendrik Schmitz. Ich bin {currentAge} Jahre alt
              komme aus Aachen und lebe dort auch derzeit. Ich habe den Dualen
              Studiengang{" "}
              <a href="https://www.fh-aachen.de/studium/angewandte-mathematik-und-informatik-bsc/">
                Scientific Programming
              </a>{" "}
              absolviert und somit meinen Bachelor of Science an der{" "}
              <a href="https://www.fh-aachen.de/">FH Aachen</a> erworben und
              meine Ausbildung zum{" "}
              <a href="https://www.matse-ausbildung.de/">
                Mathematisch technischen Softwareentwickler
              </a>{" "}
              beim{" "}
              <a href="https://www.wzl.rwth-aachen.de/">
                Werkzeugmaschinenlabor WZL der RWTH Aachen
              </a>{" "}
              abgeschlossen. Seit Dezember 2023 bin ich Senior
              Softwareentwickler bei{" "}
              <a href="https://www.itemis.com/">itemis</a> und arbeite
              hauptsächlich als Fullstack Entwickler mit vue.js und kotlin.
            </p>
            <br />
            <p>
              In meiner achtjährigen beruflichen Laufbahn habe ich umfangreiche
              Erfahrungen in der Frontend-Entwicklung gesammelt, wobei ich mich
              auf Vue.js spezialisiert habe. Darüber hinaus verfüge ich über
              umfangreiche Kenntnisse im Back-End, da ich zuvor hauptsächlich
              mit Java und Kotlin gearbeitet habe. Diese Erfahrung ermöglicht es
              mir, sowohl bei der Frontend- als auch bei der Backend-Entwicklung
              effektiv zusammenzuarbeiten und nahtlose Integrationen zu
              gewährleisten.
            </p>
            <br />
            <p>
              Dank meines fundierten Fachwissens und meiner umfangreichen
              Erfahrung bin ich in der Lage, auf effektive Weise mit
              verschiedenen Akteuren in der Softwareentwicklung
              zusammenzuarbeiten, darunter Product Owner, Designer,
              Backend-Entwickler und DevOps-Experten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
