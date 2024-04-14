import {
    add,
    edit,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";

export default function BookForm({ book = null }) {
    const dispatch = useAppDispatch();
    const [name, setName] = useState(book?.name ?? '');
    const [price, setPrice] = useState(book?.price ?? '');
    const [category, setCategory] = useState(book?.category ?? '');
    const [description, setDescription] = useState(book?.description ?? '');

    function handleSubmit(e) {
        e.preventDefault();
        const formContent = {
            name,
            price,
            category,
            description
        }
        
        
        // quick and dirty validation 
        let isValid = true;
        for (let field in formContent) {
            console.log(formContent, field);
            
            if (formContent[field] === '') {
                console.log('err');
                isValid = false;
            }
        }

        if (!isValid) return;

        if (book?.id) {
            dispatch(edit({id:book.id, ...formContent}))
        } else {
            dispatch(add(formContent))
        }

        setName('');
        setPrice('');
        setCategory('');
        setDescription('');
    }
    
    return (
        <form>
            <label className="input input-bordered flex items-center gap-2">
                Name
                <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="Enter book name"/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Price
                <input required value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="grow" placeholder="Enter price" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Category
                <input required value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="grow" placeholder="daisy@site.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Description
                <input required value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="grow" placeholder="daisy@site.com" />
            </label>
            <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
        </form>
    );
}