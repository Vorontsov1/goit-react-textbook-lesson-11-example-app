// Импортируем хук
import { useSelector, useDispatch } from "react-redux";
// Импортируем генератор экшена
import { setstatusFilter } from "redux/action";
import { Button } from "components/Button/Button";
// Импортируем объект значений фильтра
import { statusFilters } from "redux/contants";


export const StatusFilter = () => {
  //Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.status);
  
  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const hanleFilterChange = filter => dispatch(setstatusFilter(filter));


  return (
    <div>
    <Button 
    selected={filter === statusFilters.all}
    onClick={() => hanleFilterChange(statusFilters.all)}
    >All
    </Button>

    <Button 
    selected={filter === statusFilters.all}
    onClick={() => hanleFilterChange(statusFilters.active)}
    >Active
    </Button>
    
    <Button 
    selected={filter === statusFilters.complited}
    onClick={() => hanleFilterChange(statusFilters.all)}
    >Complited
    </Button>
   
    </div>
  );
};
