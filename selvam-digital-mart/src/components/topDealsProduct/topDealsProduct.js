import './topDealsProduct.css';

function TopDealsProduct() {
    return (
        <div className='productContainer'>
            <div className='product' >

                <div className='productImage'>
                    <img src={props.image}></img>
                </div>
                <div className='productDetails'>
                    <p className='productName'>{props.name}</p>
                    <p className='productDetail'>{props.detail}</p>
                    <p className='productOffer'>{props.offer}%offer</p>
                    <p className='productPrice'>M.R.P <s>{(props.price)}</s> <b>{finalPrice}</b></p>
                </div>
            </div>
        </div>


    )
}