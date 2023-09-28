import React from 'react'

const Home = () => {

  const imgUrl = "https://firebasestorage.googleapis.com/v0/b/lemoninfilm.appspot.com/o/home.jpg?alt=media&token=973a2c7c-1a87-42f0-b73f-023ba220116f&_gl=1*1dsxrqp*_ga*OTQ3NjQ5NTE3LjE2OTM0ODAxMjY.*_ga_CW55HF8NVT*MTY5NTkwNzk3My41NC4xLjE2OTU5MDgwNjkuNTMuMC4w";

  return (
    <div className="bg-cover bg-center bg-no-repeat w-screen h-screen absolute top-0 left-0" style={{ backgroundImage: `url(${imgUrl})` }}>
      <p className="text-white absolute bottom-3 flex justify-center w-full">
        <a href="https://www.instagram.com/lemoninfilm">@lemoninfilm</a>
        </p>
    </div>
  )
}

export default Home
