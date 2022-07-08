import { Button, ButtonPost } from "./style";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const ContainerView = styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;
`;

function Index() {
  const payload = useSelector((state) => state.payload);
  const renderView = () => {
    if (payload) {
      return (
        payload.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.userId}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          )
        })
      );
    }
  };

  return (
    <Container>
      <ContainerView>
        <Container>
          <Button />
          <ButtonPost />
        </Container>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userID</th>
              <th scope="col">id</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {renderView()}
          </tbody>
        </table>
      </ContainerView>
    </Container>
  );
}

export default Index;
