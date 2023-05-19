/* eslint-disable react/jsx-key */

import { Icons } from "global/icons.constants";
import { useAuth } from "store/slices/auth/useAuth";

import { Button } from "components/Button";
import { Form } from "components/Form/Form";
import { Input } from "components/Form/Input";
import { LaboratoryTag } from "components/LaboratoryTag";
import { Modal } from "components/Modal";
import { ModalFooter } from "components/Modal/Modal.styles";
import { Tooltip } from "components/Tooltip";
import { useModal } from "hooks/modals.hook";

import { DashboardSchema } from "./example.schema";

import { Header, SubTitle, Title, Wrapper } from "./Dashboard.styles";

export function Dashboard(): JSX.Element {
  const { user } = useAuth();

  const Actions = (rowId: string): JSX.Element => {
    return (
      <Button
        callback={() => {
          alert(rowId);
        }}
        label="Reservar"
        icon={<Icons.BulletinNewIcon />}
      />
    );
  };

  const { isVisible, toggleModal } = useModal();

  return (
    <Wrapper>
      <Modal
        title="Criar usuário"
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <Form schema={DashboardSchema} onSubmit={(data) => {}}>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="smvasconcelos11@gmai.com"
          />
          <Input
            label="Senha"
            type="textarea"
            name="password"
            placeholder="*******"
          />
          <ModalFooter>{Actions("1")}</ModalFooter>
        </Form>
      </Modal>
      <Header>
        <Tooltip label="Clique para abrir o modal" position="right">
          <Title onClick={toggleModal}>Olá, {user.name}!</Title>
        </Tooltip>
        <SubTitle>
          Welcome back to your all in Dashboard and more text here!{" "}
          <LaboratoryTag status="REJECTED" label="Confirmado" />
        </SubTitle>
        <Icons.BulletinNewIcon />
      </Header>
    </Wrapper>
  );
}
