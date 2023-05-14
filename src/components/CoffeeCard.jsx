
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, category, chef, taste, details, photoURL } = coffee;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-300 bg-opacity-60 md:p-8 rounded-lg">
                <figure><img src={photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Chef: {chef}</h2>
                    {/* <h2 className="card-title">Name: {pri}</h2> */}
                </div>
                <div className="card-actions flex-col justify-end mb-8">
                    <button className="btn btn-square bg-[#D2B48C]">
                        <FaEye></FaEye>
                    </button>
                    <Link to={`updateCoffee/${_id}`}><button className="btn btn-square bg-[#3C393B]">
                        <FaPen></FaPen>
                    </button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square bg-[#EA4744]">
                        <FaTrash></FaTrash>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;