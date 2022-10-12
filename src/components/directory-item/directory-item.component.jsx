import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {

    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer to={`shop/${ category.title}`}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </Body>
        </DirectoryItemContainer>
    );
};


export default DirectoryItem;
