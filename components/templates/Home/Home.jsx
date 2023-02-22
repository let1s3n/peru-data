import React from 'react';
const Home = ({ data }) => {

  /* useEffect(() => {
    console.log("DATA: ", data)

  }, [data]) */


  return (

    <section className="main-container">
      <h1 className="title">Hola mundo</h1>

      {/* {
        data.periods?.map(period => {
          return (
            <>
              <p className="mb-3">{period.name}</p>

              <p>{period.values[0]}</p>
            </>
          )
        })
      } */}
    </section>


  );
};

export default Home;
