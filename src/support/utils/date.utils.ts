export namespace date {
  export const today = (): Date => {
    return new Date()
  }

  export const tomorrow = (): Date => {
    const tomorrowDate = new Date()
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    return tomorrowDate
  }

  export const yesterday = (): Date => {
    const yesterdayDate = new Date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    return yesterdayDate
  }

  export const nextWeek = (): Date => {
    const nextWeekDate = new Date()
    nextWeekDate.setDate(nextWeekDate.getDate() + 7)
    return nextWeekDate
  }

  export const previousWeek = (): Date => {
    const previousWeekDate = new Date()
    previousWeekDate.setDate(previousWeekDate.getDate() - 7)
    return previousWeekDate
  }
}
