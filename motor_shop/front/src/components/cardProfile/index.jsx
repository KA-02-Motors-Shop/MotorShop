import {
  Container,
  ContentInfos,
  ContentProfile,
  DivButton,
  DivDescription,
  DivTitle,
  ImgContent,
} from "./styles";

export const CardProfile = () => {
  return (
    <Container>
      <ContentProfile>
        <ContentInfos>
          <ImgContent
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt="imagem perfil"
          />
          <DivTitle>
            <h1>Samuel Leao</h1>
            <span className="label">Anunciante</span>
          </DivTitle>
          <DivDescription>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </span>
          </DivDescription>
        </ContentInfos>
        <DivButton>
          <button>Criar anuncio</button>
        </DivButton>
      </ContentProfile>
    </Container>
  );
};
