import TagCloudItem from './TagCloudItem';

const TagCloud = ({tags}) => {
    const tagCloudItems = tags.map((tag) => 
        <TagCloudItem key={tag.id} tag={tag} />
    );

    return (
        <ul className="tagcloud">
            { tagCloudItems }
        </ul>
    )
};

export default TagCloud;