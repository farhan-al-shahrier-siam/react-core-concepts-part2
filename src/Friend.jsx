export default function Friend({ friend }) {
    const { name, email, address } = friend;
    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Address: {address.street}</p>
        </div>
    );
}
