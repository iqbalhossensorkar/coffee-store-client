import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, supplier, category, chef, taste, details, photoURL } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const updatedCoffee = { name, supplier, category, chef, taste, details, photoURL }
        // console.log(updatedCoffee); 
        // console.log(name, supplier, category, chef, taste, details, photoURL);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Coffee Updated successfully!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='container mx-auto p-5 bg-addCoffee'>
            <Link to="/"><p className='flex items-center text-xl mt-10'><FaArrowLeft></FaArrowLeft> Back To Home</p></Link>
            <div className='p-10 mx-12 bg-[#F4F3F0] my-8'>
                <h4 className='text-center text-3xl font-bold'>Update Existing Coffee Details</h4>
                <p className='text-center my-5'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name='chef' defaultValue={chef} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name='taste' defaultValue={taste} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name='details' defaultValue={details} className="input input-bordered w-full" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photoURL' defaultValue={photoURL} className="input input-bordered w-full" required />
                    </div>
                    <input className='w-full btn bg-[#E3B577] mt-6' type="submit" value="Update Coffee Details" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;