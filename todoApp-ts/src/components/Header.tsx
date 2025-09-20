const Header = () => {
    const headerStyle = () => {
        return {
            height: "40px"
        };
    };

    return (
        <>
            <div className="bg-primary container-fluid d-flex justify-content-center align-items-center text-white" style={{ ...headerStyle() }}>
                <h4>TODO APP -- Kevin Eduardo Sanchez - TSX</h4>
            </div>
        </>
    );
};

export default Header;
