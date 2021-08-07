import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>I'm the header</h1>
      {/* left */}
      <div>
        <Image src="https://links.papareact.com/qd3" layout="fill" />
      </div>

      {/* Middle */}
      <div></div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
