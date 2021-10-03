import { useEffect, useState } from "react/cjs/react.development"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}
export default useProducts;