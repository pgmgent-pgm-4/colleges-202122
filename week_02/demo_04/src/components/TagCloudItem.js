const TagCloudItem = ({tag}) => {
    return (
        <li className="tagcloud__item">{tag.name}</li>
    )
};

export default TagCloudItem;