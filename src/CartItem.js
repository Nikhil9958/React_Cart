import react from "react";

class CartItem extends react.Component{
    constructor(){
        super();
        this.state={
            title:'Mobile Phone',
            price: 999,
            qty: 0,
            img: ''
        }
    }
    increaseQuantity=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }

        })
    }
    decreaseQuantity=()=>{
        const{qty}=this.state;
        if(qty==0)
            return;
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    }
    resetQuantity=()=>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty=0
            }
        })
    }
    render(){    
        const {title, price, qty} = this.state;                       // for a class component to be a react component, we need to write render method
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <p style={{fontSize:25}}>{title}</p>
                    <p style={{color: '#777'}}>RS {price}</p>
                    <p style={{color: '#777'}}>Quantity: {qty}</p>
                <div className="cart-item-actions">
                         <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="https://as2.ftcdn.net/v2/jpg/00/70/16/29/1000_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg"/>
                         <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"/>
                         <img alt="delete" className="action-icons" onClick={this.resetQuantity} src="https://t4.ftcdn.net/jpg/04/53/62/11/240_F_453621185_6ECOCMQaCdYqYWKg2SqfRP44HJJD2XMF.jpg"/>
                </div>
                </div>

            </div>
        );
    
    }
}

const styles = {
    image:{
        height: 180,
        width: 180,
        borderRadius:4,
        backgroundColor: '#ccc',
    }
}
export default CartItem;