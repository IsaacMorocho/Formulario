const deportes=()=>{
    return(
        <div>
            <h1>Deportes Favoritos</h1>
            <div>
                <div className="deportes">
                    <img src="/fut.jpg"/>
                    <h3>FUTBOL</h3>
                </div>
                <div className="deportes">
                    <img src="/bici.jpg" alt="" />
                    <h3>CICLISMO</h3>
                </div>
                <div className="deportes">
                    <img src="/basq.jpg" alt="" />
                    <h3>BASQUET</h3>
                </div>
            </div>
        </div>
    )

}
export default Deportes;