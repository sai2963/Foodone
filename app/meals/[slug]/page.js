const Restaurants =({params})=>{
    return(
        <>
        <h1>Welcome to our restaurant</h1>
        <p>{params.slug}</p>
        </>
    )
}
export default Restaurants