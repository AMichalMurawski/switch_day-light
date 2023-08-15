import { SwitchDarkMode } from '../../../switches';
import { Board, SwitchWrapper, TextBox, TextWrapper } from './BoardStyle';

export const BoardSwitchDarkMode = ({ props }) => {
  return (
    <Board $mode={props.value} $duration={props.duration}>
      <SwitchWrapper>
        <SwitchDarkMode
          height={props.height}
          width={props.width}
          value={props.value}
          duration={props.duration}
          draggable={props.draggable}
          onClick={props.onClick}
        />
      </SwitchWrapper>
      <TextWrapper $switchHeight={props.height}>
        <TextBox $fontWeight={700}>Lorem ipsum dolor sit amet.</TextBox>
        <TextBox>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo
          autem, voluptas repudiandae minima delectus est perspiciatis molestiae
          velit similique.
        </TextBox>
        <TextBox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, beatae
          aliquam nam vel error perferendis, quisquam quasi porro nihil
          voluptate harum cupiditate facere ea et alias eaque? Ullam mollitia
          modi molestiae exercitationem delectus labore alias autem totam
          eveniet suscipit nesciunt, laborum aut, maiores corporis similique
          voluptatum adipisci deserunt commodi quisquam!
        </TextBox>
      </TextWrapper>
    </Board>
  );
};
