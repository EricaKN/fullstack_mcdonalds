import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";

import { CartContext } from "../context/cart";

const CartSheet = () => {
    const { isOpen, toggleCart, products } = useContext(CartContext);
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>bla</SheetDescription>
                </SheetHeader>
                {products.map((product) => (
                    <h1 key={product.id}>
                        {product.name} - {product.quantity}
                    </h1>
                ))}
            </SheetContent>
        </Sheet>
    );
};
export default CartSheet;

