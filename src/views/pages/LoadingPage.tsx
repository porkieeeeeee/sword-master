import styled from "@emotion/styled";

const LoadingPage = () => {
    return (
        <Container>
            <p>Loading..</p>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #111;
`;

export default LoadingPage;
