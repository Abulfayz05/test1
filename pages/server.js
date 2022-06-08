export async function getStaticProps() {
  const res = await fetch(`https://54.uz/rang.php`);
  const data = await res.json();

  return { props: { data } };
}

export default function Logo({ data }) {

        if(data.status === 'qora'){
            return <div > <h2 style={{color:'black'}}>{data.status}</h2> </div>
            
          } else if(data.status === 'yaxshil'){
            return <div > <h2 style={{color:'green'}}>{data.status}L</h2> </div>
          }else if(data.status === 'qizil'){
            return <div > <h2 style={{color:'red'}}>{data.status}</h2> </div>
          }
          else if(data.status === 'sariq'){
            return <div ><h2 style={{color:'yellow'}}>{data.status}</h2> </div>
          }
          else if(data.status === 'oq'){
            return <div style={{background: "black", width:'100px',  height: '100px'}}> <h2 style={{color:'white', textAlign: 'center'}}>{data.status}</h2> </div>
          }else if(data.status === "ko'k"){
            return <div > <h2 style={{color:'blue'}}>{data.status}</h2> </div>
          }
          return null
    
}




