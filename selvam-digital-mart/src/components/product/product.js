import './product.css'

function Product() {
    return (
        <div className='container'>
            <div className='product'>
                <div className='productImage'>
                    <img src=''></img>
                </div>
                <div className='productDetails'>
                    <p className='productName'></p>
                    <p className='productDetail'>detail</p>
                    <p className='productOffer'>%offer</p>
                    <p className='productPrice'>price</p>
                </div>
                <div className='button'>
                    <button className='offerButton'>Offer Apply</button>
                    <button className='addToCartButton'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;