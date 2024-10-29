function WomanPricesTable() {
  return (
    <section className="prices--container">
      <h2>Árak:</h2>
      <div className="underline"></div>
      <table>
        <thead>
          <tr>Női</tr>
          <tr>
            <th>Alapszolgáltatás</th>
            <th>Rövid</th>
            <th>Félhosszú</th>
            <th>Hosszú</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Mosás+Szárítás</th>
            <td>5000 HUF</td>
            <td>6000 HUF</td>
            <td>8000 HUF</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default WomanPricesTable