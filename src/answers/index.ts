import { answers } from './list'
import { IdiomsList, getHint } from '~/logic'

export function getAnswerOfDay(day: number) {
  const [word = '', hint = ''] = answers[day] || []
  return {
    word,
    hint: hint || getHint(word),
  }
}

export function getAnswerOfStorage() {
  const storage = useStorage<Record<string, any>>('handle-answer-meta', {})
  let answer = storage.value.answer
  if (answer == null) {
    const index = Math.floor(Math.random() * IdiomsList.length)
    const word = IdiomsList[index]
    const words = word.split('')
    const hintIndex = Math.floor(Math.random() * words.length)
    const hint = words[hintIndex]
    answer = {}
    answer.word = word
    answer.hint = hint
    storage.value.answer = answer
  }
  return answer
}
