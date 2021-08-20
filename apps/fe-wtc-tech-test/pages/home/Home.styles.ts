import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 2px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 300px;
  max-width: 200px;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    transition: 0.5s ease-out;
  }
`;

export const PosterContainer = styled.div`
  display: flex;
  flex: 1;
  border-radius: 10px;
  height: 220px;
  width: 150px;
  overflow: hidden;
`;

export const Poster = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease-out;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
  align-items: center;
  justify-content: space-between;
`;

export const RatingsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Ratings = styled.text`
  font-size: 12px;
  text-align: center;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;
