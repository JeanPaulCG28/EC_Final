export default function ComponentePrincipal() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../images/img3.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="../images/img2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="../images/img3.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="alert alert-success" role="alert" >
                <center><h1 >Bienvenidos</h1></center>
            </div>
            <div className="row">
            <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos sed ullam expedita fugit quo sunt nostrum, esse et earum rem optio, accusamus dolores sapiente dolorem commodi! Nihil, perspiciatis corrupti.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam. Sit cupiditate aliquam distinctio placeat nihil doloremque. Corporis itaque iste impedit, a unde odio deserunt? Ab blanditiis aliquam eligendi esse.</p>
            </div>
            <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem autem repellat pariatur molestias aliquid porro optio quos dolores quae quo praesentium odio cupiditate dolore dolorem nisi, iste temporibus cum. Ipsam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque nostrum iste quis corrupti ad. Quidem fugit doloremque saepe, ratione culpa hic tempore quis eum nisi suscipit autem minima facere?</p>
            </div>
        </div>

        </div>        
    );
}