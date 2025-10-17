                import clsx from 'clsx'
import type { FileItem } from '@/components/FileList'
import { CheckIcon, FileIcon, FolderOpenIconLarge } from '@data/icons/icons'

type GridViewProps = {
  files: FileItem[]
  selectionMode: boolean
  isSelected: (index: number) => boolean
  toggleItem: (index: number) => void
}

export default function GridView({ files, selectionMode, isSelected, toggleItem }: GridViewProps) {
  return (
    <div className="p-6">
      {files.length === 0 ? (
        <div className="text-center py-12 text-sm text-gray-500 dark:text-gray-400">
          <FolderOpenIconLarge />
          <p>No files found</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {files.map((file, index) => (
            <div
              key={file.id ?? index}
              onClick={() => selectionMode && toggleItem(index)}
              className={clsx('relative flex flex-col items-center p-3 rounded-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer', selectionMode && isSelected(index) ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500' : 'bg-white dark:bg-gray-900 border-transparent')}
            >
              {selectionMode && (
                <div className="absolute top-1 right-1">
                  <div className={clsx('w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200', isSelected(index) ? 'bg-blue-600 border-blue-600' : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700')}>
                    {isSelected(index) && <CheckIcon className="text-white w-3 h-3" />}
                  </div>
                </div>
              )}

              <div className="mb-2">{file.icon ?? <FileIcon className="text-blue-600 w-7 h-7" />}</div>
              <div className="text-center w-full">
                <div className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate" title={file.name ?? 'Unknown'}>
                  {file.name ?? 'Unknown'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


