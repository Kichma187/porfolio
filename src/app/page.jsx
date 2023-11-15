import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mainSection">
        <div className="leftMainSection">
          <h1>Ben Felsner</h1>

          <p>I have one brother whos as old as me.</p>
          <p className="textshort">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            enim corporis voluptates ipsa esse ut tempora voluptate a quisquam
            ad distinctio architecto laudantium neque aliquam. Alias unde dolore
            enim consectetur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Soluta in ipsum labore architecto dolores excepturi a iusto
            repellat magnam, similique ad explicabo quod porro nemo provident
            minima iste exercitationem odit.
          </p>
        </div>
        <div className="rightMainSection">
          <img
            src="https://image.brigitte.de/10912866/t/G_/v3/w960/r1/-/pfannkuchen.jpg"
            alt="Pfannkuchen"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section className="secondMain">
        <div className="leftSecondMain">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/71/02/06/1000_F_571020679_fDaAaTQpawNR0QGthpmljqQmchsmRkC6.jpg"
            alt="Cool cat"
            width={400}
            height={400}
          />
        </div>
        <div className="middleSecondMain">
          <h2>My Hobbies</h2>
          <ul>
            <li>Tennis</li>
            <li>Swimming</li>
            <li>Gaming</li>
            <li>playing trumpet</li>
            <li>always have arguments with my brother</li>
          </ul>
        </div>
        <div className="rightSecondMain">
          <img
            className="leftpicture"
            src="https://as1.ftcdn.net/v2/jpg/05/71/02/06/1000_F_571020679_fDaAaTQpawNR0QGthpmljqQmchsmRkC6.jpg"
            alt="Cool cat"
            width={400}
            height={400}
          />
        </div>
      </section>

      <footer>
        <img
          src="https://i.pinimg.com/564x/d8/f2/5d/d8f25d2cdc552e518f448fad30e1ba79.jpg"
          alt="sword"
        />
        <div className="Contact">
          <h3>Contact</h3>

          <p>Tel: 84568 523489</p>
          <p>Adress: 7000 Bitola</p>
        </div>
        <div className="AboutMe">
          <h3>About Me</h3>

          <p>Name:Ben</p>
          <p>Hobbies,Tennis,swimming</p>
          <p>Age: 14 years</p>
        </div>
        <div className="Copyright">
          <h3>Copyright</h3>
          <p>Copyright by Ben</p>
          Everyone who trys to copy will get arrested!
        </div>
      </footer>
    </main>
  );
}
