import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localizadade"
        }
      />

      <UserInformation
        name={"Kaique Moreira"}
        picture={"https://github.com/moreirak14.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
