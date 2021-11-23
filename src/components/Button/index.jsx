import { useDispatch } from "react-redux";
import { useState } from "react";

import { addCommentThunk } from "../../store/modules/user/thunk";
import { useSelector } from "react-redux";
import { Container } from "./styles";

function Button() {
  const comentario = useSelector((state) => state.user.comments);

  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  // console.log(comentario);

  return (
    <Container>
      <input
        type="text"
        value={comment}
        placeholder="Novo comentário"
        onChange={(evt) => setComment(evt.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addCommentThunk(comment));
          setComment("");
        }}
      >
        Adicionar comentário
      </button>
      <div>
        {comentario.map((element, index) => (
          <div>
            <p key={index}>{element}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Button;
