export const LinkList = ({links}) => {

    if (!links) {
        return <h1>No links</h1>;
    }

    return (
        <ul>
            {links.map((link) => (
                <li key={ link.id }>

                </li>
            ))}
        </ul>
    );
}