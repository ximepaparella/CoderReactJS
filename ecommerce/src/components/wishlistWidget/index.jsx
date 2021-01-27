import '../icon/icon.scss'

const WishlistComponent = ({ icon, size }) => {

    function addToWishlist() {
        alert("Added to WishList!");
    }

    return (
        <a>
            <i onClick={addToWishlist} className={`com-icon ${icon} ${size}`}> </i>
        </a>

    );
}

export default WishlistComponent;