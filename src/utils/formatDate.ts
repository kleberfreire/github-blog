import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDateDistanceToNow(date: string) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR,
      })
    : ''
}

export function formatForDatetime(date: string): string {
  return date ? format(new Date(date), 'yyyy-MM-dd HH:mm') : ''
}
