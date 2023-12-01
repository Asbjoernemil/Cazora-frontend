import Products from "../components/Products";

export default function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-start">
        Her er galleriet, min ven!
        <Products />
        </div>
    )
}