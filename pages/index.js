function Home() {
  return (
    <>
      <h1>Em construção...</h1>

      <p>
        Última flor é um espaço dedicado ao pensamento crítico, à reflexão e à
        expressão criativa. Aqui, valoriza-se, sobretudo, a base do nosso
        pensamento: a língua portuguesa.
      </p>

      {/* O Prettier NUNCA mexe no texto que está dentro de crases */}
      <div style={{ whiteSpace: "pre-line", fontStyle: "italic" }}>
        {`Última flor do Lácio, inculta e bela,
      És a um tempo, esplendor e sepultura:
      ouro nativo, que na ganga impura
      A bruta mina entre os cascalhos vela.

      Amo-te assim, desconhecida e obscura,
      Tuba de alto clangor, lira singela,
      Que tens o trom e o silvo da procela
      E o arrolo da saudade e da ternura!

      Amo o teu viço agreste e o teu aroma
      De virgens selvas e de oceano largo!
      Amo-te ó rude e doloroso idioma,

      Em que da voz materna ouvi: "meu filho!"
      E em que Camões chorou, no exílio amargo,
      O gênio sem ventura e o amor sem brilho!`}
      </div>

      <p>
        <strong>— Olavo Bilac</strong>
      </p>
    </>
  );
}

export default Home;
