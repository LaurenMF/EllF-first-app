import React from 'react';
import { Link } from 'gatsby';

const ProductsPage = () => {
    return (
        <React.Fragment>
            <h1>Products Page</h1>
            <button>
                <Link to='/products/games'>Games Section</Link>
            </button>
        </React.Fragment>
    );
}

export default ProductsPage;