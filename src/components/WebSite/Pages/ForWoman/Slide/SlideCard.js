import { SlideData } from "./SlideData";

const SlideCard = () => {
    return ( 
        <section className='fw-slide'>
                {SlideData.map((item,index) => {
                    return(
                        <article className='fw-box'>
                        <div className="slide-i">
                            <img src={item.img} width={160} height={160} alt="s-img" />
                        </div>
                        <div className='fw-s-deet'>
                        <h3>{item.hOne}</h3>
                        <p>{item.para}</p>
                        </div>
                        </article>
                    )
                })}
           
        </section>
     );
}
 
export default SlideCard;