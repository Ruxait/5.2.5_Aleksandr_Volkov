import { Container, Text, Group, TextInput, Button, Flex } from '@mantine/core'
import { useTypedDispatch, useTypedSelector } from '../hooks/redux'
import { getVacancies, vacanciesSlice } from '../store/reducers/vacanciesSlice'

export const VacanciesHeader = () => {
  const dispatch = useTypedDispatch()
  const { search } = useTypedSelector(state => state.vacanciesReducer)
  const { setSearch } = vacanciesSlice.actions

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  const handleSearchSubmit = () => {
    if (search.trim()) {
      dispatch(getVacancies(search))
    } else {
      dispatch(getVacancies())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit()
    }
  }

  return (
    <div
      style={{
        borderBottom: '1px solid #0F0F1033',
      }}>
      <Container size="lg" pt="xl" pb="md">
        <Flex justify="space-between" align="center" wrap="wrap" gap="md">
          <div>
            <Text fw={700} size="xl" mb={4}>
              Список вакансий
            </Text>
            <Text c="dimmed" mb="lg">
              по профессии Frontend-разработчик
            </Text>
          </div>

          <Group gap="sm" align="center">
            <TextInput
              placeholder="🔍︎ Должность или название компании"
              onKeyDown={handleKeyDown}
              value={search}
              onChange={handleSearchChange}
              style={{ minWidth: '400px' }}
              radius="md"
              size="md"
            />
            <Button
              onClick={handleSearchSubmit}
              size="md"
              radius="md"
              style={{
                backgroundColor: '#3b5bdb',
              }}>
              Найти
            </Button>
          </Group>
        </Flex>
      </Container>
    </div>
  )
}
