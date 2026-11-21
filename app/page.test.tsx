import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './page'

test('첫 화면에 저장소 이름 제목이 보인다', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'nextjs-ci-practice' })).toBeDefined()
})
