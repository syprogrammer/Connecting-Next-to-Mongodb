
const Home = ({data}) => {
  
  return (
    <>
      <div className="container w-full mx-auto my-4 bg-sky-600 list-none p-5">
        {
          data.product.map((items) => {
            return <li id={items.id} className="text-center bg-black m-2 p-5 text-white">{items.title}</li>;
          })
        }
</div>
    </>
  )
}
export async function getServerSideProps() {
    let d = await fetch(`http://localhost:3000/api/getproduct`);
  let data = await d.json();
  console.log("ssr data",data)
  return {
    props: {data},
  };
}



export default Home
